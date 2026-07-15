package com.trustpay.controller;

import com.trustpay.dto.CreateEscrowRequest;
import com.trustpay.model.Escrow;
import com.trustpay.service.EscrowService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/escrows")
@CrossOrigin(origins = "http://localhost:5173")
public class EscrowController {

    private final EscrowService escrowService;

    public EscrowController(EscrowService escrowService) {
        this.escrowService = escrowService;
    }

    @PostMapping
    public Escrow createEscrow(@RequestBody CreateEscrowRequest request) {
        return escrowService.createEscrow(request);
    }

    @GetMapping
    public List<Escrow> getAllEscrows() {
        return escrowService.getAllEscrows();
    }

    @GetMapping("/{id}")
    public Escrow getEscrowById(@PathVariable Long id) {
        return escrowService.getEscrowById(id);
    }
}