package com.trustpay.service;

import com.trustpay.dto.CreateEscrowRequest;
import com.trustpay.model.Escrow;
import com.trustpay.model.EscrowStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class EscrowService {

    private final List<Escrow> escrows = new ArrayList<>();
    private Long nextId = 1L;

    public Escrow createEscrow(CreateEscrowRequest request) {

        Escrow escrow = new Escrow();

        escrow.setId(nextId++);
        escrow.setBuyerName(request.getBuyerName());
        escrow.setSellerName(request.getSellerName());
        escrow.setAmount(request.getAmount());
        escrow.setDescription(request.getDescription());
        escrow.setStatus(EscrowStatus.CREATED);
        escrow.setCreatedAt(LocalDateTime.now());

        escrows.add(escrow);

        return escrow;
    }

    public List<Escrow> getAllEscrows() {
        return escrows;
    }

    public Escrow getEscrowById(Long id) {

        return escrows.stream()
                .filter(e -> e.getId().equals(id))
                .findFirst()
                .orElse(null);
    }
}