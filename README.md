# Wholesale Prices Testing

A comprehensive end-to-end testing suite for wholesale pricing functionality using Cypress with Cucumber BDD framework.

## 🎯 Project Overview

This project contains automated tests for validating wholesale pricing features in e-commerce applications. The tests ensure that wholesale customers can see appropriate pricing throughout their shopping experience, including product pages and shopping cart.

## 🚀 Features

- **BDD Testing**: Uses Cucumber for behavior-driven development
- **E2E Testing**: End-to-end testing with Cypress
- **Wholesale Price Validation**: Tests wholesale pricing display and cart functionality
- **Modern Build Tools**: Uses esbuild for fast test compilation

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- A running application instance at `http://localhost:10003`

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd wholesale-prices-testing
```

2. Install dependencies:

```bash
npm install
```

## 🧪 Test Scenarios

The test suite covers the following wholesale pricing scenarios:

### 1. Product Page Wholesale Price Display

- **Given**: User is logged in as a wholesale customer
- **When**: User visits a product page
- **Then**: Wholesale price should be displayed

### 2. Cart Wholesale Price Validation

- **Given**: User is logged in as a wholesale customer
- **And**: User adds a product to the cart
- **When**: User views the cart
- **Then**: Wholesale price should appear instead of sale price

## 🏃‍♂️ Running Tests

### Run All Tests

```bash
npm test
```

### Run Tests in Cypress Test Runner

```bash
npx cypress open
```

### Run Tests Headlessly

```bash
npx cypress run
```

### Run Specific Feature

```bash
npx cypress run --spec "e2e/wholesale-pricing.feature"
```

## 📁 Project Structure

```
wholesale-prices-testing/
├── e2e/
│   ├── wholesale-pricing.feature    # Cucumber feature file
│   └── wholesale-pricing.js         # Step definitions
├── cypress.config.js                 # Cypress configuration
├── package.json                      # Project dependencies
└── README.md                         # This file
```

## ⚙️ Configuration

The project is configured to:

- Use Cucumber for BDD testing
- Process `.feature` files with esbuild
- Target application at `http://localhost:10003`
- Support modern JavaScript features

### Cypress Configuration

- **Base URL**: `http://localhost:10003`
- **Spec Pattern**: `**/*.feature`
- **Preprocessor**: esbuild with Cucumber support

## 🔧 Development

### Adding New Test Scenarios

1. Add new scenarios to the `.feature` file
2. Implement corresponding step definitions in the `.js` file
3. Follow the Given-When-Then BDD pattern

### Example Feature Addition

```gherkin
Scenario: Wholesale price calculation
  Given I am a wholesale customer
  When I purchase multiple items
  Then I should see bulk discount applied
```

## 📊 Test Reports

Test results and reports are generated in the following directories:

- `cypress/videos/` - Test execution videos
- `cypress/screenshots/` - Failure screenshots
- `cypress/downloads/` - Downloaded files during tests

## 🐛 Troubleshooting

### Common Issues

1. **Application Not Running**

   - Ensure your application is running at `http://localhost:10003`
   - Check if the port is available and not blocked

2. **Test Failures**

   - Verify wholesale customer credentials are correct
   - Check if the application's wholesale pricing is properly configured
   - Review Cypress console logs for detailed error information

3. **Dependency Issues**
   - Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
   - Update Cypress: `npx cypress update`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add your test scenarios
4. Ensure all tests pass
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 📞 Support

For questions or issues:

- Check the Cypress documentation: [https://docs.cypress.io/](https://docs.cypress.io/)
- Review Cucumber BDD documentation: [https://cucumber.io/docs/](https://cucumber.io/docs/)
- Open an issue in the project repository

---

**Happy Testing! 🧪✨**
