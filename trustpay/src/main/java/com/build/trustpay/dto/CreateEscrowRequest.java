package com.build.trustpay.dto;

import java.math.BigDecimal;

public class CreateEscrowRequest {
    private String buyer;
    private String seller;
    private BigDecimal amount;

    public String getBuyer() { return buyer; }
    public void setBuyer(String buyer) { this.buyer = buyer; }

    public String getSeller() { return seller; }
    public void setSeller(String seller) { this.seller = seller; }

    public BigDecimal getAmount() { return amount; }
    public void setAmount(BigDecimal amount) { this.amount = amount; }
}

