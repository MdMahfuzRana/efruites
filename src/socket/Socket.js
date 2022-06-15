import io from "socket.io-client";

const socket = io.connect("https://shopbackendd.herokuapp.com/",{
    rejectUnauthorized: false
});

export { socket };