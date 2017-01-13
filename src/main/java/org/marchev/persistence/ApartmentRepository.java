package org.marchev.persistence;

import org.marchev.model.Apartment;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "apartments", path = "apartments")
public interface ApartmentRepository extends PagingAndSortingRepository<Apartment, Long> {
}
