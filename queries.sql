-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT ProductName, CategoryName from Product as P
JOIN Category as C ON P.CategoryId = C.Id
    
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT Id, CompanyName from [Order] as O
JOIN Shipper as S on O.ShipVia = S.Id
WHERE O.OrderDate < "2012-08-09"

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT ProductName, Quantity from Product as P
JOIN OrderDetail as O on P.id = O.ProductId
WHERE O.OrderId = 10251
ORDER by P.ProductName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT Id, CompanyName, LastName from [Order] as O
JOIN Customer as C on O.CustomerId = C.Id
JOIN Employee as E on O.EmployeeId = E.Id
*

