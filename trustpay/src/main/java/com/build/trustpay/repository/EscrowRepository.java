package com.build.trustpay.repository;

import com.build.trustpay.model.Escrow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// We extend JpaRepository, telling it to manage the 'Escrow' entity where the primary key ID is a 'Long'
public interface EscrowRepository extends JpaRepository<Escrow, Long> {
    // Basic CRUD operations (save, findById, findAll, delete) are already built-in!
}
