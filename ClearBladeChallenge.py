from clearblade.ClearBladeCore import System, Query, Developer
import time
import random
import psutil

SystemKey = "e48e91870cc0eda3c6878bd5cd54"
SystemSecret = "E48E91870CBCC7968CAFBDF49407"

system = System(SystemKey, SystemSecret)
user = system.User("tomwhou@gmail.com", "ClearBladeChallenge")

mqtt_service = system.Messaging(user)

mqtt_service.connect()

while True:
	cpu_usage = psutil.cpu_percent(60)
	print(cpu_usage)
	mqtt_service.publish("trigger/CodingChallenge", str(cpu_usage))

mqtt_service.disconnect()

