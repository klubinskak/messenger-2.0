import Pusher from 'pusher';
import ClientPusher from 'pusher-js';

export const serverPusher = new Pusher ({
    appId: "1534035",
    key: "03cc6e5151f207b305ae",
    secret: "2838f83fccf721bff592",
    cluster: "eu",
    useTLS: true
})

export const clientPusher = new ClientPusher('03cc6e5151f207b305ae', {
    cluster: 'eu'
})