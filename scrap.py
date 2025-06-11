import requests
import re
from bs4 import BeautifulSoup
from datetime import datetime, date
import pandas as pd
import schedule
import time


def intoCsv():
            today = date.today()
            day = today.strftime("%A")

            now = datetime.now()

            current_time = int(now.strftime("%H"))+1
            print(current_time)

            try:
                res = requests.get("https://www.kravihora-brno.cz/kryta-plavecka-hala")
                #pokud nebude fungovat tento try except změnit na    requests.get(url, headers = {}, verify=False)
            except requests.exceptions.ConnectionError:
                   requests.status_codes = "Connection refused"


            soup = BeautifulSoup(res.text, "html.parser")

            #HTML class where is the info I need
            found = soup.select(".field__item")[3]

            #exact <p>tag with my info
            pTag = str(found.find_all("p")[-1])

            #extracting the exact info
            numberOfPeopleInThePool = (re.findall(r'\d+', pTag))[0]
            print(numberOfPeopleInThePool)


            day_data = [[current_time, numberOfPeopleInThePool]]
            df1 = pd.DataFrame(day_data, columns=['Time', 'Number of people'])
            result = pd.concat([df1])
            result.to_csv(f'{day}.csv', index=False, mode="a")

schedule.every(30).minutes.do(intoCsv)
#schedule.every().hour.do(job)
#schedule.every().day.at("22:00").do()

while 1:
    schedule.run_pending()
    time.sleep(1)
