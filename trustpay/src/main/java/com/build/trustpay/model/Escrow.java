package com.trustpay.model;

import java.time.LocalDateTime;

public class Escrow {

    private Long id;
    private String buyerName;
    private String sellerName;
    private Double amount;
    private String description;
    private EscrowStatus status;
    private LocalDateTime createdAt;

    public Escrow() {
    }

    public Escrow(Long id,
                  String buyerName,
                  String sellerName,
                  Double amount,
                  String description,
                  EscrowStatus status,
                  LocalDateTime createdAt) {
        this.id = id;
        this.buyerName = buyerName;
        this.sellerName = sellerName;
        this.amount = amount;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBuyerName() {
        return buyerName;
    }

    public void setBuyerName(String buyerName) {
        this.buyerName = buyerName;
    }

    public String getSellerName() {
        return sellerName;
    }

    public void setSellerName(String sellerName) {
        this.sellerName = sellerName;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public EscrowStatus getStatus() {
        return status;
    }

    public void setStatus(EscrowStatus status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}