package main.java.commonframework;

/**
 * Created by Администратор on 06.08.2016.
 */
public class Tools {

    public static int getRandomInt(int min, int max) {
        return (int) (min + Math.random() * (max - min + 1));
    }

    public static double getRandomDouble(double min, double max) {
        return min + Math.random() * (max - min + 1);
    }

    public static String getRandomString(int length) {
        String res = "";
        for (int i = 0; i < length; ++i) {
            res += (char) (getRandomInt(65, 91));
        }
        return res;
    }
}
