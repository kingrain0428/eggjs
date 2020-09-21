<html>
<head>
    <title>Hacker News</title>
    <link rel='stylesheet' href='/public/css/news.css' />
</head>
<body>
    <div>
        
        <ul class='news-view view' >
            {% for item in list %}
                <li class='item' >
                    <a href='{{item.url}}' >{{item.title}}--{{helper.relativeTime(item.time)}}</a>
                </li>
            {% endfor %}
        </ul>
    </div>
</body>
</html>