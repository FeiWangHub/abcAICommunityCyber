from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from supabase import create_client, Client
import os
from dotenv import load_dotenv
from typing import List

load_dotenv()

app = FastAPI(title="ABC AI Community Backend")

# Enable CORS for the React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://trae8msphioo.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Supabase configuration
url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)

class FeedbackCreate(BaseModel):
    name: str
    email: EmailStr
    comment: str

class FeedbackResponse(BaseModel):
    id: str
    created_at: str
    name: str
    email: str
    comment: str

@app.get("/")
async def root():
    return {"message": "ABC AI Community API is running"}

@app.post("/feedback", response_model=FeedbackResponse)
async def create_feedback(feedback: FeedbackCreate):
    try:
        response = supabase.table("feedback").insert(feedback.model_dump()).execute()
        if response.data and len(response.data) > 0:
            return response.data[0]
        raise HTTPException(status_code=400, detail="Failed to create feedback")
    except Exception as e:
        print(f"Error creating feedback: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/feedback", response_model=List[FeedbackResponse])
async def get_feedback():
    try:
        response = supabase.table("feedback").select("*").order("created_at", desc=True).execute()
        return response.data
    except Exception as e:
        print(f"Error fetching feedback: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
