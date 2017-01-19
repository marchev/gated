package org.marchev.gated.persistence;

import org.marchev.gated.model.Apartment;
import org.marchev.gated.model.Payment;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface PaymentRepository extends PagingAndSortingRepository<Payment, Long> {
}
