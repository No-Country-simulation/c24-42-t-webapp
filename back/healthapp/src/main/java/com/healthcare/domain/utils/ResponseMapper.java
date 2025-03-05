package com.healthcare.domain.utils;

import java.util.AbstractMap;
import java.util.Map;

public final class ResponseMapper {

    private ResponseMapper() {
        throw new IllegalStateException("Utility class");
    }

    @SafeVarargs
    public static Map<String, String> response(Map.Entry<String, String>... entries) {
        if (entries == null) {
            throw new IllegalArgumentException("Entries must not be null");
        }
        for (Map.Entry<String, String> entry : entries) {
            if (entry == null) {
                throw new IllegalArgumentException("Entry must not be null");
            }
        }
        return Map.ofEntries(entries);
    }

    public static Map.Entry<String, String> entry(String key, String value) {
        return new AbstractMap.SimpleEntry<>(key, value);
    }

}
