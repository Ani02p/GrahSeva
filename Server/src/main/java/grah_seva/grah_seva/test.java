package grah_seva.grah_seva;
import java.util.*;


public class test {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int M = sc.nextInt();

        String[] strings = new String[N];
        int[] costs = new int[N];
        int[] worths = new int[N];
        for (int i = 0; i < N; i++) strings[i] = sc.next();
        for (int i = 0; i < N; i++) costs[i] = sc.nextInt();
        for (int i = 0; i < N; i++) worths[i] = calculateWorth(strings[i]);

        boolean[][] contradict = new boolean[N][N];
        for (int i = 0; i < M; i++) {
            int a = findIndex(strings, sc.next());
            int b = findIndex(strings, sc.next());
            contradict[a][b] = contradict[b][a] = true;
        }

        int budget = sc.nextInt();
        int[] dp = new int[budget + 1];

        for (int i = 0; i < (1 << N); i++) {
            int currentCost = 0, currentWorth = 0;
            boolean valid = true;

            for (int j = 0; j < N; j++) {
                if ((i & (1 << j)) > 0) {
                    for (int k = 0; k < N; k++) {
                        if ((i & (1 << k)) > 0 && contradict[j][k]) {
                            valid = false;
                            break;
                        }
                    }
                    if (!valid) break;
                    currentCost += costs[j];
                    currentWorth += worths[j];
                }
            }
            if (valid && currentCost <= budget) {
                dp[currentCost] = Math.max(dp[currentCost], currentWorth);
            }
        }

        int maxWorth = 0;
        for (int i = 0; i <= budget; i++) maxWorth = Math.max(maxWorth, dp[i]);
        System.out.println(maxWorth);
    }

    private static int calculateWorth(String str) {
        int worth = 0;
        for (char c : str.toCharArray()) worth += (c - 'a' + 1);
        return worth;
    }

    private static int findIndex(String[] strings, String target) {
        for (int i = 0; i < strings.length; i++) {
            if (strings[i].equals(target)) return i;
        }
        return -1;
    }
}
