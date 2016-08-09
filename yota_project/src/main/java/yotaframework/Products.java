package main.java.yotaframework;

import main.java.commonframework.Log;

import java.util.HashMap;

/**
 * Created by Администратор on 07.08.2016.
 */
public class Products {
    private static Products instance = null;
    private HashMap<String, Integer> position = new HashMap<>();
    private HashMap<Integer, HashMap<String,String>> allProducts = new HashMap<>();
    private final String DAYS_NEW_PRODUCT = "30";
    private final String DAYS_CURR_PRODUCT = "0";
    private final String TEXT_DAYS_CURR_PRODUCT = "дней осталось";
    private final String TEXT_DAYS_NEW_PRODUCT = "дней останется";
    private final String TEXT_SPEED_KBIT_PRODUCT = "Кбит/сек (макс.)";
    private final String TEXT_SPEED_MBIT_PRODUCT = "Мбит/сек (макс.)";
    private final String TEXT_COST_PRODUCT = "руб. в месяц";
    private final Integer NUM_PRODUCTS = 24;

    private Integer numCurrProduct = 0;
    private Integer numNewProduct = 0;
    private Integer numCurrPosition = 0;


    public static  Products getInstance() {
        if (instance == null)
            instance = new Products();
        return instance;
    }



    public Integer getNUM_PRODUCTS(){
        return NUM_PRODUCTS;
    }

    public HashMap<String,String> getProductInfo(Integer key) {
        return allProducts.get(key);
    }
    // установить номер текущего продукта
    public void setCurrentProduct(Integer num)
    {
      position.put("Current",num);
    }
    //получить номер текущего продукта
    public Integer getCurrProduct()
    {
        return position.get("Current");
    }
    //  установить номер нового продукта
    public void setNewProduct(Integer num)
    {
        position.put("New",num);
    }
    //  получить номер нового продукта
    public Integer getNewProduct()
    {
        return position.get("New");
    }
    //  установить номер позиции бегунка
    public void setPosition(Integer num)
    {
        position.put("Position",num);
    }
    //  получить номер позиции бегунка
    public Integer getPosition()
    {
        return position.get("Position");
    }

    public void clearPosition()
    {
        position.put("Current",0);
        position.put("New",0);
        position.put("Position",0);
    }

    private Products (){
        position.put("Current",0);
        position.put("New",0);
        position.put("Position",0);

        HashMap<String,String> infoProduct0 = new HashMap<>();
        HashMap<String,String> infoProduct1 = new HashMap<>();
        HashMap<String,String> infoProduct2 = new HashMap<>();
        HashMap<String,String> infoProduct3 = new HashMap<>();
        HashMap<String,String> infoProduct4 = new HashMap<>();
        HashMap<String,String> infoProduct5 = new HashMap<>();
        HashMap<String,String> infoProduct6 = new HashMap<>();
        HashMap<String,String> infoProduct7 = new HashMap<>();
        HashMap<String,String> infoProduct8 = new HashMap<>();
        HashMap<String,String> infoProduct9 = new HashMap<>();
        HashMap<String,String> infoProduct10 = new HashMap<>();
        HashMap<String,String> infoProduct11 = new HashMap<>();
        HashMap<String,String> infoProduct12 = new HashMap<>();
        HashMap<String,String> infoProduct13 = new HashMap<>();
        HashMap<String,String> infoProduct14 = new HashMap<>();
        HashMap<String,String> infoProduct15 = new HashMap<>();
        HashMap<String,String> infoProduct16 = new HashMap<>();
        HashMap<String,String> infoProduct17 = new HashMap<>();
        HashMap<String,String> infoProduct18 = new HashMap<>();
        HashMap<String,String> infoProduct19 = new HashMap<>();
        HashMap<String,String> infoProduct20 = new HashMap<>();
        HashMap<String,String> infoProduct21 = new HashMap<>();
        HashMap<String,String> infoProduct22 = new HashMap<>();
        HashMap<String,String> infoProduct23 = new HashMap<>();

        infoProduct0.put("Speed","64");
        infoProduct0.put("SpeedText",TEXT_SPEED_KBIT_PRODUCT);
        infoProduct0.put("Cost", "0");
        infoProduct0.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(0,infoProduct0);

        infoProduct1.put("Speed","320");
        infoProduct1.put("SpeedText",TEXT_SPEED_KBIT_PRODUCT);
        infoProduct1.put("Cost", "300");
        infoProduct1.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(1,infoProduct1);

        infoProduct2.put("Speed","416");
        infoProduct2.put("SpeedText",TEXT_SPEED_KBIT_PRODUCT);
        infoProduct2.put("Cost", "350");
        infoProduct2.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(2,infoProduct2);

        infoProduct3.put("Speed","512");
        infoProduct3.put("SpeedText",TEXT_SPEED_KBIT_PRODUCT);
        infoProduct3.put("Cost", "400");
        infoProduct3.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(3,infoProduct3);

        infoProduct4.put("Speed","640");
        infoProduct4.put("SpeedText",TEXT_SPEED_KBIT_PRODUCT);
        infoProduct4.put("Cost", "450");
        infoProduct4.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(4,infoProduct4);

        infoProduct5.put("Speed","768");
        infoProduct5.put("SpeedText",TEXT_SPEED_KBIT_PRODUCT);
        infoProduct5.put("Cost", "500");
        infoProduct5.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(5,infoProduct5);

        infoProduct6.put("Speed","896");
        infoProduct6.put("SpeedText",TEXT_SPEED_KBIT_PRODUCT);
        infoProduct6.put("Cost", "550");
        infoProduct6.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(6,infoProduct6);

        infoProduct7.put("Speed","1.0");
        infoProduct7.put("SpeedText",TEXT_SPEED_MBIT_PRODUCT);
        infoProduct7.put("Cost", "600");
        infoProduct7.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(7,infoProduct7);

        infoProduct8.put("Speed","1.3");
        infoProduct8.put("SpeedText",TEXT_SPEED_MBIT_PRODUCT);
        infoProduct8.put("Cost", "650");
        infoProduct8.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(8,infoProduct8);

        infoProduct9.put("Speed","1.7");
        infoProduct9.put("SpeedText",TEXT_SPEED_MBIT_PRODUCT);
        infoProduct9.put("Cost", "700");
        infoProduct9.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(9,infoProduct9);

        infoProduct10.put("Speed","2.1");
        infoProduct10.put("SpeedText",TEXT_SPEED_MBIT_PRODUCT);
        infoProduct10.put("Cost", "750");
        infoProduct10.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(10,infoProduct10);

        infoProduct11.put("Speed","3.1");
        infoProduct11.put("SpeedText",TEXT_SPEED_MBIT_PRODUCT);
        infoProduct11.put("Cost", "800");
        infoProduct11.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(11,infoProduct11);

        infoProduct12.put("Speed","4.1");
        infoProduct12.put("SpeedText",TEXT_SPEED_MBIT_PRODUCT);
        infoProduct12.put("Cost", "850");
        infoProduct12.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(12,infoProduct12);

        infoProduct13.put("Speed","5.0");
        infoProduct13.put("SpeedText",TEXT_SPEED_MBIT_PRODUCT);
        infoProduct13.put("Cost", "900");
        infoProduct13.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(13,infoProduct13);

        infoProduct14.put("Speed","5.7");
        infoProduct14.put("SpeedText",TEXT_SPEED_MBIT_PRODUCT);
        infoProduct14.put("Cost", "950");
        infoProduct14.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(14,infoProduct14);

        infoProduct15.put("Speed","6.4");
        infoProduct15.put("SpeedText",TEXT_SPEED_MBIT_PRODUCT);
        infoProduct15.put("Cost", "1000");
        infoProduct15.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(15,infoProduct15);

        infoProduct16.put("Speed","7.1");
        infoProduct16.put("SpeedText",TEXT_SPEED_MBIT_PRODUCT);
        infoProduct16.put("Cost", "1050");
        infoProduct16.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(16,infoProduct16);

        infoProduct17.put("Speed","7.8");
        infoProduct17.put("SpeedText",TEXT_SPEED_MBIT_PRODUCT);
        infoProduct17.put("Cost", "1100");
        infoProduct17.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(17,infoProduct17);

        infoProduct18.put("Speed","8.5");
        infoProduct18.put("SpeedText",TEXT_SPEED_MBIT_PRODUCT);
        infoProduct18.put("Cost", "1150");
        infoProduct18.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(18,infoProduct18);

        infoProduct19.put("Speed","9.2");
        infoProduct19.put("SpeedText",TEXT_SPEED_MBIT_PRODUCT);
        infoProduct19.put("Cost", "1200");
        infoProduct19.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(19,infoProduct19);

        infoProduct20.put("Speed","10.0");
        infoProduct20.put("SpeedText",TEXT_SPEED_MBIT_PRODUCT);
        infoProduct20.put("Cost", "1250");
        infoProduct20.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(20,infoProduct20);

        infoProduct21.put("Speed","12.0");
        infoProduct21.put("SpeedText",TEXT_SPEED_MBIT_PRODUCT);
        infoProduct21.put("Cost", "1300");
        infoProduct21.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(21,infoProduct21);

        infoProduct22.put("Speed","15.0");
        infoProduct22.put("SpeedText",TEXT_SPEED_MBIT_PRODUCT);
        infoProduct22.put("Cost", "1350");
        infoProduct22.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(22,infoProduct22);

        infoProduct23.put("Speed","Макс");
        infoProduct23.put("SpeedText",TEXT_SPEED_MBIT_PRODUCT);
        infoProduct23.put("Cost", "1400");
        infoProduct23.put("CostText",TEXT_COST_PRODUCT);
        allProducts.put(23,infoProduct23);
    }


}
