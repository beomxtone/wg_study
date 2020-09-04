package wgstudy.tabledata;

import lombok.Data;

@Data
public class Champion {
	private String champ_name;
	private int champ_id;
	private int passive;
	private int skill_Q;
	private int skill_W;
	private int skill_E;
	private int skill_R;
	private String version;
}
