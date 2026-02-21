
# **Project Blueprint: Fun Test Platform**

## **1. Overview**

This project aims to create a fun and engaging test platform designed for elementary school students. The site will host a variety of simple, visually appealing tests, such as personality analyses, "future partner" predictions, and friendship style analyses. The design will remain colorful, modern, and intuitive to keep a young audience engaged as the platform expands.

## **2. Style, Design, and Features**

### **A. Visual Design**
*   **Aesthetics:** The user interface is bold, vibrant, and interactive with a consistent space/cosmic superstar theme.
*   **Layout:** A clean, centered, single-column layout that is mobile-responsive.
*   **Color Palette:** A vibrant palette with a dark background. Deep blues, purples, and bright accent colors like neon pink, yellow, and turquoise are used for interactive elements.
*   **Typography:** A playful and readable font with varied sizes for clear hierarchy.
*   **Iconography & Imagery:** Cute, cartoonish icons and images are used for results.

### **B. Core Features**
*   **Test Selection Screen:** A main menu where users can choose from a list of available tests.
*   **Start Screen:** A welcoming screen for each test with its title and a "Start" button.
*   **Question Pages:** A series of multiple-choice questions for each test.
*   **Progress Bar:** A visual indicator of test completion.
*   **Result Page:** A unique result page based on the user's answers, with a title, image, and description.

## **3. Plan for Current Request**

**Objective:** Add the popular "Teto/Egen" friendship style test.

**Steps:**
1.  **Update `main.js` Data Structure:**
    *   Add a new test object with the id `tetoEgen` to the main `tests` object.
    *   Create questions that explore friendship dynamics, with answers corresponding to either "Teto" (more expressive and eager) or "Egen" (more reserved and independent) styles.
    *   Create the two result types, "Teto Friend" and "Egen Friend," with positive, kid-friendly descriptions and suitable images.
    *   The calculation will be `mostVoted` to determine which of the two styles is dominant.
2.  **Verify UI:** The existing framework will automatically add the new test to the selection screen. No UI changes are needed.
