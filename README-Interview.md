# QA Engineer (SDET) Interview Coding Test

## **Test Details**
- **Duration**: 30-45 minutes  
- **Tool**: Playwright (Node.js/TypeScript)  
- **Test Focus**: UI automation, assertions, handling elements, and debugging  
- **Objective**: Assess ability to write and debug test automation for a real-world e-commerce app  

---

## **Task 1: Login and Verify Inventory Page (10 mins)**
### **Scenario**
1. Open `https://www.saucedemo.com/`
2. Log in with valid credentials:  
   - **Username**: `standard_user`  
   - **Password**: `secret_sauce`  
3. Verify successful login by checking that the **Products** title is visible

### **Expected Output**
- The test should pass if the title "Products" is present after login.  

---

## **Task 2: Add Item to Cart and Validate (10-15 mins)**
### **Scenario**
1. Log in using Task 1 steps  
2. Add the first item to the cart  
3. Click the cart icon  
4. Verify that the item is present in the cart  

### **Expected Output**
- The test should pass if the item name matches the product added.  
---

## **Task 3: Checkout Flow (15-20 mins)**
### **Scenario**
1. Add an item to the cart using Task 2 steps  
2. Click on the cart and proceed to checkout  
3. Fill in checkout details:  
   - **First Name**: `QA`  
   - **Last Name**: `Engineer`  
   - **Postal Code**: `12345`  
4. Continue to the next page and verify the order summary  
5. Click “Finish” and verify the "Thank you" confirmation
6. Track the time taken for the checkout completion request.
7. Ensure the order confirmation page appears within 3 seconds.

### **Expected Output**
- The test should pass if the confirmation message “Thank you for your order!” appears.  

---

## **Bonus Task: Negative Test Case (5-10 mins)**
### **Scenario**
1. Try to log in with invalid credentials (e.g., `locked_out_user`)  
2. Verify that the error message appears  

### **Expected Output**
- The test should pass if an error message is displayed.  

---

## **Instructions for Candidate**
- Use **TypeScript** with Playwright  
- Write clean and maintainable code  
- Include meaningful assertions  
- Handle waiting conditions properly  
