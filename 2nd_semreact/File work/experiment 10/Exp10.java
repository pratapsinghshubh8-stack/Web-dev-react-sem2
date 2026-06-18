abstract class BankAccount {
    private int accountNumber;
    private String accountHolderName;
    private double balance;

    BankAccount(int accountNumber, String accountHolderName, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    public int getAccountNumber() {
        return accountNumber;
    }

    public String getAccountHolderName() {
        return accountHolderName;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public void deposit(double amount) {
        balance += amount;
        System.out.println("Amount Deposited: " + amount);
    }

    public void displayDetails() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder Name: " + accountHolderName);
        System.out.println("Balance: " + balance);
    }
    abstract void calculateInterest();
}
class SavingsAccount extends BankAccount {

    SavingsAccount(int accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    void calculateInterest() {
        double interest = getBalance() * 0.05;
        System.out.println("Savings Account Interest: " + interest);
    }
}
class CurrentAccount extends BankAccount {

    CurrentAccount(int accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    void calculateInterest() {
        double interest = getBalance() * 0.02;
        System.out.println("Current Account Interest: " + interest);
    }
}

public class Exp10 {
    public static void main(String[] args) {

        SavingsAccount sa = new SavingsAccount(2077, "PRAKASH", 50000);
        CurrentAccount ca = new CurrentAccount(2011, "ASHU", 100000);

        System.out.println("----- Savings Account -----");
        sa.deposit(5000);
        sa.displayDetails();
        sa.calculateInterest();

        System.out.println();

        System.out.println("----- Current Account -----");
        ca.deposit(7000);
        ca.displayDetails();
        ca.calculateInterest();
    }
}