import os
from flask import Flask, render_template, request, redirect, url_for, send_from_directory, jsonify
from werkzeug.utils import secure_filename
from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileRequired, FileAllowed
from wtforms import SubmitField
from PyPDF2 import PdfMerger
import requests
import csv
from bs4 import BeautifulSoup
from flask_mysqldb import MySQL



UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'pdf'}


app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['SECRET_KEY'] = 'supersecretkey'


app.config['MYSQL_USER'] = 'brych'
app.config['MYSQL_PASSWORD'] = 'Iphone4S'
app.config['MYSQL_DB'] = 'brych$data'
app.config['MYSQL_HOST'] = 'brych.mysql.pythonanywhere-services.com'


mysql = MySQL(app)


class UploadForm(FlaskForm):
    pdfs = FileField('', validators=[FileRequired(), FileAllowed(ALLOWED_EXTENSIONS, 'PDFs only!')])
    submit = SubmitField('  🤝  ')

@app.route('/')
def my_home():
    return render_template('index.html')

@app.route('/<string:page_name>') #we use the argument that we call page_name
def html_page(page_name):               #tu ho využijem
    return render_template(page_name)       #tady renderujem z templatu názvy



def write_to_file(data):   #zapisuje do database.txt informace o senderovi emailu
    with open('database.txt', mode='a') as database:
        email = data["email"]
        subject = data["subject"]
        message = data["message"]
        file = database.write(f'\n{email},{subject},{message}')   #vytvářím dictionary

def write_to_csv(data):
     with open('database.csv', newline='', mode='a') as database2:
        email = data["email"]
        subject = data["subject"]
        message = data["message"]
        csv_writer = csv.writer(database2, delimiter=',', quotechar='"', quoting = csv.QUOTE_MINIMAL)
        csv_writer.writerow([email,subject,message])



@app.route('/submit_form', methods=['POST', 'GET'])
def submit_form():
    if request.method == 'POST':
        try:
            data = request.form.to_dict()
            write_to_csv(data)
            return redirect('/thankyou.html')
        except:
            return 'did not save to database'
    else:
        return'sth went wrong'


@app.route('/merge', methods=['GET', 'POST'])
@app.route('/emerge', methods=['GET', 'POST'])
def merge():
    template_name = 'merge.html'  # default to Czech

    # Check the URL path to determine language
    if 'emerge' in request.path:
        template_name = 'emerge.html'


    form = UploadForm()
    if form.validate_on_submit():
        pdf_files = request.files.getlist('pdfs')
        pdfs = []

        for file in pdf_files:
            filename = secure_filename(file.filename)
            path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(path)
            pdfs.append(path)

        merger = PdfMerger()
        for pdf in pdfs:
            merger.append(pdf)

        output_path = os.path.join(app.config['UPLOAD_FOLDER'], "mergedPdf.pdf")
        merger.write(output_path)
        merger.close()

        return redirect(url_for('download'))

    return render_template(template_name, form=form)


@app.route('/download')
def download():
    return send_from_directory(app.config['UPLOAD_FOLDER'], 'mergedPdf.pdf', as_attachment=True)


@app.route('/search', methods=['GET', 'POST'])
def search():
    language = request.args.get('language') or ''  # default to an empty string if no language is provided

    url1 = 'https://brych.pythonanywhere.com/works.html'
    response = requests.get(url1)
    content = response.content
    soup = BeautifulSoup(content, 'html.parser')

    atags = soup.find_all('a')
    h3s = soup.find_all('h3')
    ptags = soup.find_all('p')

    results = []

    try:
        for x in atags:
            if language.lower() in x.get_text().lower():
                results.append({
                    'title': x.find_previous_sibling('h3').get_text(),
                    'description': x.find_previous_sibling('p').get_text(),
                    'link': x.get('href')
                })

        for y in h3s:
            if language.lower() in y.get_text().lower():
                results.append({
                    'title': y.get_text(),
                    'description': y.find_next_sibling('p').get_text(),
                    'link': y.find_next_sibling('a').get('href')
                })

        for z in ptags:
            if language.lower() in z.get_text().lower():
                results.append({
                    'title': z.find_previous_sibling('h3').get_text(),
                    'description': z.get_text(),
                    'link': z.find_next_sibling('a').get('href')
                })
    except:
        return jsonify({"message": f"No results for this tech :-( Try: Python, JavaScript, PHP, SQL, REACT, Playwright, Flask) {language}"})

    # Insert into the database AFTER populating results.
    cur = mysql.connection.cursor()
    cur.execute('INSERT INTO searches (query, result_count) VALUES (%s, %s)', (language, len(results)))
    mysql.connection.commit()
    cur.close()  # Close the cursor

    if not results:
        return jsonify({"message": f"No results for this tech :-( Try: Python, JavaScript, PHP, SQL, REACT, Playwright, Flask) {language}"})

    return jsonify(results)



if __name__ == "__main__":
    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)
    app.run(debug=True)




