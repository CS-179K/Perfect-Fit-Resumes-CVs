from huggingface_hub import InferenceClient
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Initialize Hugging Face InferenceClient
client = InferenceClient(
    os.getenv('HG_NAME'),
    token=os.getenv('HG_API_KEY'),
)

prompt = "Give me just the answer, no need for a sentence. If you cannot find out or recognize it is not a job posting, say 'NO'\n"
# prompt = ""
# job = "https://hub.miracosta.edu/meet/profile.aspx?id=179"
job = "https://jobs.careers.microsoft.com/global/en/job/1738705/Software-Engineer"
prompt1 = "What is the job title for this job?: " + job
prompt2 = "What is the company of this job?: " + job

def get_response(prompt):
    prompts = [{"role": "user", "content": prompt}]
    result = ''
    for message in client.chat_completion(
        prompts,
        max_tokens=500,
        stream=True,
    ):
        result += message.choices[0].delta.content
    return result

response1 = get_response(prompt + prompt1)
response2 = get_response(prompt + prompt2)

print("Response to Prompt 1:", response1)
print("Response to Prompt 2:", response2)