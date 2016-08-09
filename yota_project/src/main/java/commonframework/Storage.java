package main.java.commonframework;

import java.util.HashMap;

/**
 * Created by Администратор on 07.08.2016.
 */
public class Storage {
    private static HashMap<String, Object> data = new HashMap<>();

    /**
     * Положить объект в хранилище
     * @param key
     * @param value
     */
    public static void put(String key, Object value){
        data.put(key, value);
    }

    /**
     * Взять объект из хранилища
     * @param key
     * @return
     */
    public static Object get(String key){
        return data.get(key);
    }

    /**
     * Взять объект из хранилища, переведя его в строку
     * @param key
     * @return
     */
    public static String getString(String key){
        return (String)data.get(key);
    }

    /**
     * Взять объект из хранилища, переведя его в число с плавоющей точкой
     * @param key
     * @return
     */
    public static Float getFloat(String key){
        return (Float)data.get(key);
    }

    /**
     * Взять объект из хранилища, переведя его в целое число
     * @param key
     * @return
     */
    public static int getInt(String key){
        return (Integer)data.get(key);
    }

    /**
     * Очистить хранилище
     * @return
     */
    public static void clear(){
        data.clear();
    }

    /**
     * Удалить объект из хранилища
     * @param key
     * @return
     */
    public static void remove(String key){
        data.remove(key);
    }

    /**
     * Проверить, существует ли объект в хранилище
     * @param key
     * @return
     */
    public static boolean containsKey(String key){
        return data.containsKey(key);
    }


    /**
     * Взять хранилище целиком
     */
    public static HashMap<String, Object> getData() {return data;}

}



