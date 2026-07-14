package com.build.trustpay.service;

import com.build.trustpay.dto.CreateEscrowRequest;
import com.build.trustpay.model.Escrow;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class EscrowService {

    private final Map<String, Escrow> escrowStorage = new ConcurrentHashMap<>();

    public Escrow createEscrow(CreateEscrowRequest request) {
        String uniqueId = UUID.randomUUID().toString();

        Escrow newEscrow = new Escrow(
                uniqueId,
                request.getBuyer(),
                request.getSeller(),
                request.getAmount(),
                "CREATED"
        );

        escrowStorage.put(uniqueId, newEscrow);
        return newEscrow;
    }

    public List<Escrow> getAllEscrows() {
        return new ArrayList<>(escrowStorage.values());
    }

    public Escrow getEscrowById(String id) {
        return escrowStorage.get(id);
    }
}