package wgstudy.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import wgstudy.tabledata.Champion;

@Repository
public class ChampionDao {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	public List<Champion> getChampion(String champion) {
		String query = "SELECT * FROM CHAMPION WHERE " + champion; 
		return jdbcTemplate.query(query, new BeanPropertyRowMapper<Champion>(Champion.class));
	}
}
