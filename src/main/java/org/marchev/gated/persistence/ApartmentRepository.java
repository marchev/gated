package org.marchev.gated.persistence;

import org.marchev.gated.model.Apartment;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ApartmentRepository extends PagingAndSortingRepository<Apartment, Long> {
}
