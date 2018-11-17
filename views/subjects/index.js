< !DOCTYPE html >
    <html lang="en">

        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                        <style>
                            .footer {
                                position: fixed;
                            left: 0;
                            bottom: 0;
                            padding: 25px;
                            width: 100%;
                            color: #549DF7;
                            text-align: center;
                            background: white;
                        }
                
        table {
                                font - family: arial, sans-serif;
                            border-collapse: collapse;
                            width: 100%;
                        }
                
                        td,
        th {
                                border: 1px solid #dddddd;
                            text-align: left;
                            padding: 8px;
                        }
                
        tr:nth-child(even) {
                                background - color: #dddddd;
                        }
    </style>
                        <title>Teacher Page</title>
                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
</head>

                        <body>
                            <br>
                                <br>
                                    <%- include('../partials/header') %>
    <br>
                                        <br>
                                            <div class="container">
                                                <h2>Teachers Data</h2>
                                                <a href="/teacher/add">Add Teacher</a>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Id</th>
                                                            <th>First Name</th>
                                                            <th>Last Name</th>
                                                            <th>Email</th>
                                                            <th>Options</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <% datateachers.forEach(teacher=>{%>
                                                            <tr>
                                                                <td>
                                                                    <%= teacher.id%>
                    </td>
                                                                <td>
                                                                    <%= teacher.first_name%>
                    </td>
                                                                <td>
                                                                    <%= teacher.last_name%>
                    </td>
                                                                <td>
                                                                    <%= teacher.email%>
                    </td>
                                                                <td>
                                                                    <a class="text-info" href="/teacher/edit/<%= teacher.id%>">Edit</a>
                                                                    <span>|</span>
                                                                    <a class="text-info" href="/teacher/delete/<%= teacher.id%>">Delete</a>
                                                                </td>
                                                            </tr>
                                                            <%})%>
            </tbody>
                                                </table>



                                            </div>
                                            <div style="height: 100px"></div>
                                            <br>
                                                <%- include('../partials/footer')%>
</body>

</html>