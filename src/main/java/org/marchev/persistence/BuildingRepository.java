package org.marchev.persistence;

import org.marchev.model.Building;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "buildings", path = "buildings")
public interface BuildingRepository extends PagingAndSortingRepository<Building, Long> {

    List<Building> findByName(@Param("name") String name);

}
