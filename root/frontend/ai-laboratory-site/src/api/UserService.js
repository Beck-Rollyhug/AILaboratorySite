export default class PostService {
    static async Check_uuid() {
        let response = await fetch('/api/check_uuid')
            .then(data => data.json());
        console.log(response);
        return response;
    }

    static async getAll(props) {
        const response = await fetch("/api/login",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'email': props.email,
                    'pass': props.pass
                })
            })
        if (response.ok)
        {
            let json = await response.json();
            console.log(response.status, json['status']);
            let status = json['status']
            if (status === 0)
                alert('Пользователь не найден')
            else if (status === 10)
                alert('Найден Пользователь')
            else if (status === 20)
                alert('Найден Организатор')
            else {
                alert('Cannot read status')
            }
        } else {
            alert("Ошибка HTTP: " + response.status);
        }
        return response;
    }
}