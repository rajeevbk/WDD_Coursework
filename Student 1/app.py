from flask import Flask, render_template

app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.config['DEBUG'] = True

clothing = [
    {"filename": "elephant-tee.jpg", "title": "Elephant T-Shirt", "price": 1200.00},
    {"filename": "devil-marks-tee.jpg", "title": "Devil Masks T-Shirt", "price": 1499.99},
    {"filename": "i-love-sl-tee.jpg", "title": "I <3 Sri Lanka T-Shirt", "price":  999.99},
    {"filename": "made-in-sl.jpg", "title": "Made in SL T-Shirt", "price": 1339.29},
    {"filename": "my-heart-belongs-to-sri-lanka.jpg", "title": "Heart belongs in SL", "price": 1339.29},
]

mugs = [
    {"filename": "sigiriya-art-mug.jpg", "title": "Elephant Mug", "price": 400.00},
    {"filename": "i-love-sl-mug.jpg", "title": "I Love Sri Lanka Mug", "price": 470.00},
    {"filename": "elephant-foot-mug.jpg", "title": "Elephant Foot Mug", "price": 1070.00},

]

paintings = [
    {"filename": "monks.jpg", "title": "Panting of Monks going to a temple", "price": 5000.00},
    {"filename": "elephants-from-sri-lanka-cathy-jacobs.jpg", "title": "Painting of Elephants bathing in a river", "price": 5260.00},
    {"filename": "painting-of-gothami.jpg", "title": "Painting of Gothami", "price": 6070.00},
    {"filename": "tea-harvesting.jpg", "title": "Painting of Tea harvesting", "price": 5999.99},
]


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/shop/')
def shop():
    return render_template('shop.html', clothing=clothing, mugs=mugs, paintings=paintings)


@app.route('/splash/')
def splash():
    return render_template('splash_screen.html')


if __name__ == '__main__':
    app.run(debug=True)
