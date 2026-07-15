package com.build.trustpay.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "escrows") // This names the table in your database
public class Escrow {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Automatically counts up (1, 2, 3...) for each new escrow
    private Long id;

    private String buyerAddress;
    private String sellerAddress;

    @Column(precision = 19, scale = 4)
    private BigDecimal amount; // Best practice to use BigDecimal for currency/token amounts instead of double

    private String description;

    @Enumerated(EnumType.STRING) // Saves the status as a readable string ("CREATED") instead of a number (0)
    private EscrowStatus status;

    private LocalDateTime createdAt;

    // Default constructor is REQUIRED by JPA/Hibernate
    public Escrow() {}

    // Convenience constructor for creating a new Escrow
    public Escrow(String buyerAddress, String sellerAddress, BigDecimal amount, String description) {
        this.buyerAddress = buyerAddress;
        this.sellerAddress = sellerAddress;
        this.amount = amount;
        this.description = description;
        this.status = EscrowStatus.CREATED; // Default state
        this.createdAt = LocalDateTime.now();
    }

    // Getters and Setters (IntelliJ can generate these automatically, or you can write them out)
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getBuyerAddress() { return buyerAddress; }
    public void setBuyerAddress(String buyerAddress) { this.buyerAddress = buyerAddress; }

    public String getSellerAddress() { return sellerAddress; }
    public void setSellerAddress(String sellerAddress) { this.sellerAddress = sellerAddress; }

    public BigDecimal getAmount() { return amount; }
    public void setAmount(BigDecimal amount) { this.amount = amount; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public EscrowStatus getStatus() { return status; }
    public void setStatus(EscrowStatus status) { this.status = status; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}