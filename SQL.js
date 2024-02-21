SELECT * FROM Customers
SELECT CustomerName, City FROM Customers
SELECT DISTINCT Country From Customers

SELECT  COUNT(DISTINCT Country) From Customers //Return the number of different countries
SELECT * FROM Customers WHERE Country = "Mexico" //filtering

SELECT * FROM Products ORDER BY Price (ORDER BY Price DESC) //sorting

SELECT *
FROM Customers
WHERE Country = "Spain" AND CustomerName LIKE 'G%' //filter where country is spain and customername starts with G

SELECT * FROM Customers
WHERE City NOT IN ('Paris', 'London')

//Inserting new records in a table
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...)

SELECT column_name
FROM table_name
WHERE column_name IS (NOT) NULL

//modify the existing records in a table
UPDATE table_name
SET column1 = value1, column2 = value2,...
WHERE condition

//delete existing records in a table
DELETE FROM table_name WHERE condition

//delete table completely
DROP TABLE table_name

//specify the number of records to return 
SELECT TOP 3 * FROM Customers

//Not all databases support TOP, MY SQL supports LIMIT

SELECT column_names
FROM table_name
WHERE condition
LIMIT number

//select min and max
SELECT MIN(Price) or MAX(Price)
From Products;

//total number of Products
SELECT COUNT(*) AS [number of records]
FROM Products

//returns the total sum of numeric column 
SELECT SUM(Quantity)
FROM OrderDetails

//returns average value of numeric column
SELECT AVG(Price)
FROM Products;

//_ wildcard can be any character or number but each _ represents one and only one character
SELECT * FROM Customers
WHERE City LIKE 'L_nd__';

//join is used to combined 2 or more tables based on related column between them.

SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers 
ON Orders.CustomerID = Customers.CustomerID

//union operator is used to combine the result set f 2 or more select statements
SELECT column_names FROM table_1
UNION 
SELECT column_names FROM table_2

//group by groups rows that have same values into summary rows . group by is often used with aggregate functions (count(), max(), min(), sum(), avg())
SELECT column_names
FROM table_name
WHERE condition
GROUP BY column_names
ORDER BY column_names

//having was added because where keyword cannot be used with aggregate functions
SELECT column_names
FROM table_name
WHERE condition
GROUP BY column_names
HAVING condition
ORDER BY column_name


//exists operator is used to test for the existence of any record in the subquery
SELECT column_names
FROM table_name
WHERE EXISTS 
(SELECT column_name FROM table_name WHERE condition)

//stored procedure is a prepared sql code that you can save, so the code can be reused over and over again
CREATE PROCEDURE procedure_name
AS
sql_statement
GO;

//execution of stored procedure
EXEC procedure_name;


//with parameters
CREATE PROCEDURE SelectAllCustomers @City nvarchar(30)
AS
SELECT * FROM Customers WHERE City = @City
GO;

EXEC SelectAllCustomers @City = 'London'









