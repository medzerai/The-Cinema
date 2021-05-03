from fastapi import FastAPI
import mysql.connector
from typing import Optional 
from pydantic import BaseModel 
from fastapi.middleware.cors import CORSMiddleware



origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:8080",
    "http://127.0.0.1:5500",
    "http://localhost:4200/",
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Film(BaseModel):
    nom:str 
    realisateur:str
    genre:str
    annee:int

mydb = mysql.connector.connect(host="localhost",user="root",password="",database="cinema")

@app.get("/")
async def TEST():
    return {"TEST": "okeyyy"}


# charger la liste des film
@app.get("/film") 
def load_film(nom : Optional[str]=None ,annee:Optional[str]=None,genre : Optional[str]=None): 
    mycursor = mydb.cursor()
    sql="SELECT id,nom,realisateur,annee,genre FROM film"
    vals=list()
    ch=list()
    if(annee != None or nom != None or genre != None):
        sql+=" where"
        if (nom != None):
            ch.append(" nom=%s ")
            vals.append(nom)
        if (annee != None):
            ch.append(" annee=%s ")
            vals.append(annee)
        if (genre != None):
            ch.append(" genre=%s ")
            vals.append(genre)
        sql+="and".join(ch)

    mycursor.execute(sql,vals) 
    myresult = mycursor.fetchall()
    
    t=list()
    for (id,nom,realisateur,annee,genre) in myresult:
        sql="SELECT count(*) FROM film where id=%s"
        vals=[id]
        mycursor.execute(sql,vals)       
        mycount =mycursor.fetchall()
        film=dict()
        film["id"]=id
        film["nom"]=nom
        film["realisateur"]=realisateur
        film["genre"]=genre
        film["annee"]=annee

        t.append(film)
    return t


# ajouter un film
@app.post("/film")
def ajouter_film(f:Film):
    mycursor = mydb.cursor() 
    sql="INSERT INTO film (nom,realisateur,annee,genre) VALUES(%s,%s,%s,%s)"
    vls=[f.nom,f.realisateur,f.annee,f.genre]
    mycursor.execute(sql,vls)
    mydb.commit()
    ch="film : '"+f.nom+"' est ajouté"
    return {"message":ch}


