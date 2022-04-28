package ctrlr;

import org.json.simple.*;
import org.json.simple.parser.*;

public class JsonDataManager {

	public static JsonDataManager instance = null;

	public static JsonDataManager getInstance() {
		if(instance == null) {
			instance = new JsonDataManager();
		}
		return instance;
	}
	
	public JSONObject parse(String data) {
		JSONObject jObj = null;
		JSONParser jsonParser = new JSONParser();
		try {
			jObj = (JSONObject)jsonParser.parse(data);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		catch (NullPointerException e) {
			System.out.println("NullPointerException");
			System.out.print("data: ");
			System.out.println(data);
//			e.printStackTrace();
		}
		if(jObj != null) {
			JSONObject jObj2 = new JSONObject();
			jObj2.put("data", jObj);
			return jObj2;
		}
		else {
			return null;
		}
	}
	
	public String stringify(JSONObject jObj) {
		return jObj.toJSONString();
	}
}
