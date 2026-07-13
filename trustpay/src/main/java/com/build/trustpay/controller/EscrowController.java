package com.build.trustpay.controller;

import com.build.trustpay.dto.CreateEscrowRequest;
import com.build.trustpay.model.Escrow;
import com.build.trustpay.service.EscrowService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/escrows")
public class EscrowController {

    private final EscrowService escrowService;

    // Spring automatically injects the EscrowService here
    public EscrowController(EscrowService escrowService) {
        this.escrowService = escrowService;
    }

    // POST http://localhost:8080/api/escrows
    @PostMapping
    public ResponseEntity<Escrow> createEscrow(@RequestBody CreateEscrowRequest request) {
        Escrow created = escrowService.createEscrow(request);
        return ResponseEntity.ok(created);
    }

    // GET http://localhost:8080/api/escrows
    @GetMapping
    public ResponseEntity<List<Escrow>> getAllEscrows() {
        return ResponseEntity.ok(escrowService.getAllEscrows());
    }

    // GET http://localhost:8080/api/escrows/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Escrow> getEscrowById(@PathVariable String id) {
        Escrow escrow = escrowService.getEscrowById(id);
        if (escrow == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(escrow);
    }
}