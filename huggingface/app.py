# app.py für Hugging Face Space
import gradio as gr
from huggingface_hub import InferenceClient

client = InferenceClient("mistralai/Mistral-7B-Instruct-v0.3")

def get_relevance(industry: str, article_topic: str) -> str:
    prompt = f"""Erkläre in 2-3 prägnanten Sätzen auf Deutsch, 
warum das Thema "{article_topic}" für jemanden aus dem Bereich "{industry}" 
praktisch relevant ist. Sei konkret und praxisbezogen."""
    
    response = client.text_generation(
        prompt,
        max_new_tokens=200,
        temperature=0.7
    )
    return response

demo = gr.Interface(
    fn=get_relevance,
    inputs=[
        gr.Textbox(label="Dein Bereich", placeholder="z.B. Logistik, Maschinenbau..."),
        gr.Textbox(label="Artikel-Thema", value="Large Language Models in der Praxis")
    ],
    outputs=gr.Textbox(label="Relevanz für dich"),
    title="🤖 Relevanz-Check",
    theme=gr.themes.Soft()
)

demo.launch()