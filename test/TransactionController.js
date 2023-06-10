const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const sequelize = require("sequelize");

const expect = chai.expect;
chai.use(sinonChai);

describe("Transaction Controller", async () => {
  describe("Find Transaction function", async () => {
    const sandbox = sinon.createSandbox();

    let sampleReturnedTransactionList;
    let req;
    let res;
    let TransactionController;

    beforeEach(() => {
      TransactionController = require("../controllers/TransactionsController");
      sampleReturnedTransactionList = [
        {
          id: 2,
          userId: 1,
          categoryId: 1,
          name: "McDonalds",
          amount: "6.3",
          date: "2023-06-09T09:45:51.940Z",
          createdAt: "2023-06-09T09:45:51.940Z",
          updatedAt: "2023-06-09T09:45:51.940Z",
          UserId: 1,
          CategoryId: 1,
          Category: {
            id: 1,
            name: "Food",
            color: "#ff5733",
            incomeExpenseId: 1,
            defaultCategory: true,
            createdAt: "2023-06-09T09:45:51.935Z",
            updatedAt: "2023-06-09T09:45:51.935Z",
            IncomeExpenseId: 1,
          },
        },
        {
          id: 1,
          userId: 1,
          categoryId: 1,
          name: "Starbucks",
          amount: "7.5",
          date: "2023-06-09T09:45:51.940Z",
          createdAt: "2023-06-09T09:45:51.940Z",
          updatedAt: "2023-06-09T09:45:51.940Z",
          UserId: 1,
          CategoryId: 1,
          Category: {
            id: 1,
            name: "Food",
            color: "#ff5733",
            incomeExpenseId: 1,
            defaultCategory: true,
            createdAt: "2023-06-09T09:45:51.935Z",
            updatedAt: "2023-06-09T09:45:51.935Z",
            IncomeExpenseId: 1,
          },
        },
      ];

      req = { params: {} };
      mockResponse = () => {
        const res = {};
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        return res;
      };
      res = mockResponse();
    });

    afterEach(() => {
      sinon.restore();
      sandbox.restore();
    });

    it("Can calls the findAll method to get the data from the database", async () => {
      let findAllStub = sandbox
        .stub(sequelize.Model, "findAll")
        .resolves(sampleReturnedTransactionList);

      await TransactionController.getYearlyTransactions(req, res);
      expect(findAllStub.calledOnce).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.status.calledOnce).to.be.false;
      expect(res.json).to.be.calledWith(sampleReturnedTransactionList);
    });

    it("Gets an error message and sends a status code 400 if there is a database error", async () => {
      let findAllStub = sandbox
        .stub(sequelize.Model, "findAll")
        .rejects("Error thrown");

      await TransactionController.getYearlyTransactions(req, res);
      expect(res.status.calledOnce).to.be.true;
      expect(findAllStub.calledOnce).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.status).to.be.calledWith(400);
    });
  });
});
