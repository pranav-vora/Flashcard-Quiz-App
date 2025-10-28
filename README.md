# Flashcard-Quiz-App
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flip Card</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <h1>Welcome</h1>
            </div>
            <div class="flip-card-back">
                <h1>Hello!</h1>
            </div>
        </div>
    </div>
</body>
</html>
.flip-card {
    background-color: transparent;
    width: 300px;
    height: 200px;
    perspective: 1000px; /* 3D effect */
    margin: 50px auto; /* Center the card */
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: sans-serif;
}

.flip-card-front {
    background-color: #3498db; /* Blue */
}

.flip-card-back {
    background-color: #2ecc71; /* Green */
    transform: rotateY(180deg);
}
