# ClearBladeCodingChallenge
The Coding Challenge for ClearBlade.
CodingChallenge.py: the python script that send cpu usage data from my personal machine and sends a mqtt message to trigger the 'CodingChallengeDataCollection' Code Service. This data is sent every minute.
CodingChallengeDataCollection.js: the representation of the corresponding code service that takes the mqtt message and stores the cpu usage data to the CodingChallengeData Collection.
CodingChallengeAnalysis.js: the representation of the corresponding code service that triggers every minute and gathers analytical data on the CodingChallengeData Collection. Currently it reports back the High the Low and the Average cpu usage percentages of all time.
