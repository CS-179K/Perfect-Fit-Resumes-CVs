from huggingface_hub import InferenceClient
from dotenv import load_dotenv
import os

load_dotenv()

client = InferenceClient(
    "meta-llama/Meta-Llama-3-8B-Instruct",
    token=os.getenv('HG_API_KEY'),
)

# messages = [{"role": "user", "content": "Using my resume: " + "UCR Robosub – Riverside, CA February 2023 – Present {\nSoftware Developer\n• Collaborated with a team of student engineers to design, build, and test autonomous underwater\nvehicles for participation in the RoboSub competition.\n• Utilized OpenCV to process images and enable real-time decision-making for the vehicle.\n• Designed and implemented an autonomous control system using ROS, OpenCV, and Python\n• Technologies used: Python, OpenCV, Ubuntu, Gazebo\nRobotics Team (FRC 3647) – San Diego, CA Sept 2018 – June 2020 {\nLead Developer\n• Taught students basic object-oriented programming, PID controllers, computer vision\n• Taught students techniques for debugging and optimizing code\n• Implemented an autonomous path-following algorithm using odometry and basic CV localization.\n• Technologies used: Java, Python, Raspberry Pi" +
#              "\nApollo Manufacturing Services – San Diego, CA June 2019 – September 2019 {\nWeb Developer\n• Designed, built, and published a commercial website advertising the company’s services and expertise.\n• Collaborated with 4 engineers and 4 stakeholders to gather design requirements for UI and website features" +
#              "\n• Recognized by team for extremely efficient and clean code throughout development process\n• Technologies used: HTML, CSS, JavaScript, PHP\nProjects\nFake News Classifier January 2024 – Present {\n• Collaborate with 3 other engineers to develop a Fake News Classifier using a combination of machine learning and big data technologies" +
#              "\n• The project accurately identify and classify fake news articles with 90% accuracy\n• Create a dynamic website displaying our data and findings with advanced search and sorting functions.\n• Technologies Used: Python, Apache Spark, Cassandra, Hadoop, ReactJS, AWS Cloud, HTML/CSS." +
#              "\nUnderwater Filter January 2024 – Present {\n• Developing an underwater image filter to enhance underwater images by 'removing' water effects, using advanced computer vision algorithms.\n• Experimenting with deep learning and neural network for better applying the necessary adjustments for color correction and dehazing\n• Technologies Used: Python, OpenCV" +
#              "\nadjust the resume points for this job: https://www.google.com/search?client=firefox-b-1-d&q=software%20devleoepr%20entry&jbr=sep%3A0&udm=8&ved=2ahUKEwjVtNb1-96HAxUDHUQIHSWiElAQ3L8LegQIIBAK#vhid=vt%3D20/docid%3DphOMhLqxBeqXaUlIAAAAAA%3D%3D&vssid=jobs-detail-viewer"}]

messages = [{"role": "user", "content": "extract the main points of this job:https://www.google.com/search?client=firefox-b-1-d&q=software%20devleoepr%20entry&jbr=sep%3A0&udm=8&ved=2ahUKEwjVtNb1-96HAxUDHUQIHSWiElAQ3L8LegQIIBAK#vhid=vt%3D20/docid%3DphOMhLqxBeqXaUlIAAAAAA%3D%3D&vssid=jobs-detail-viewer"}]

for message in client.chat_completion(
	messages,
	max_tokens=500,
	stream=True,
):
    # print(message.choices[0].delta.content, end="")
    
    print(message.choices[0].delta.content, end ="")
    
print("")