const colors = ["red", "yellow", "pink", "green", "purple", "orange", "blue", "black", "grey"];

const getRandomColor = () => colors[Math.floor(Math.random() * (colors.length))];

export default getRandomColor;