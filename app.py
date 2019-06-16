from flask import Flask, render_template

app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.config['DEBUG'] = True


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/shop/')
def shop():
    return render_template('shop.html')


@app.route('/splash/')
def splash():
    return render_template('splash_screen.html')


if __name__ == '__main__':
    app.run(debug=True)
