package com.build.trustpay.model;
import java.math.BigDecimal;

public class Escrow {
    private String id;
    private String buyer;
    private String seller;
    private BigDecimal amount;
    private String status; // PENDING, FUNDED, RELEASED, REFUNDED

    // Constructors
    public Escrow() {}

    public Escrow(String id, String buyer, String seller, BigDecimal amount, String status) {
        this.id = id;
        this.buyer = buyer;
        this.seller = seller;
        this.amount = amount;
        this.status = status;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getBuyer() { return buyer; }
    public void setBuyer(String buyer) { this.buyer = buyer; }

    public String getSeller() { return seller; }
    public void setSeller(String seller) { this.seller = seller; }

    public BigDecimal getAmount() { return amount; }
    public void setAmount(BigDecimal amount) { this.amount = amount; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}