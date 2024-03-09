from PyPDF2 import PdfReader
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.text_splitter import CharacterTextSplitter
from langchain_community.vectorstores import ElasticVectorSearch, Pinecone, Weaviate, FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import OpenAI
from langchain_community.callbacks import get_openai_callback
from dotenv import load_dotenv
import warnings
warnings.filterwarnings("ignore")


load_dotenv()

reader=PdfReader('datafresh.pdf')

text = ""
for page in reader.pages:
    text += page.extract_text()

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200,
    length_function=len
    )
chunks = text_splitter.split_text(text=text)


embeddings = OpenAIEmbeddings()

VectorStore = FAISS.from_texts(chunks, embedding=embeddings)
VectorStore.save_local("vectorstore","index") # Save the vectorstore to disk

llm = OpenAI()
chain = load_qa_chain(llm=llm, chain_type="stuff")






