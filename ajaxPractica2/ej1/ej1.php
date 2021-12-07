    <?php
    include '../db_connection.php';

    function ej1($conn)
    {
        $sql = 'SELECT * FROM `customers`';
        echo '<br>';
        echo '<table>';
        echo '<th>CustomerName</th>';
        echo '<th>Phone</th>';
        echo '<th>City</th>';


        foreach ($conn->query($sql) as $row) {
            echo '<tr>';
            echo '<td>' . $row['customerName'] . '<td>';
            echo '<td>' . $row['phone'] . '<td>';
            echo '<td>' . $row['city'] . '<td>';
            echo '</tr>';
        }
        echo '</table>';
    }

    ej1($conn);
    $conn = null;
    ?>