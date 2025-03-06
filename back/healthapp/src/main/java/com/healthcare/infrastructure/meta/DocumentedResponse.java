package com.healthcare.infrastructure.meta;

import java.lang.annotation.*;

import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
/**
 * <h3>This is a example of how to use it</h3>
 * We can use in our Controller this annotation
 * <h4>@DocumentedResponse</h4>
 * <p>if we use it with no parameters it will use defaults as shown below</p>
 * <p>responseCode = 200</p>
 * <p>description = Not documented description</p>
 * <p>and content will be shown as {} empty braces</p>
 */
@Target({ ElementType.METHOD, ElementType.TYPE, ElementType.ANNOTATION_TYPE })
@Retention(RetentionPolicy.RUNTIME)
@Documented
@ApiResponse
public @interface DocumentedResponse {
    String responseCode() default "200";

    String description() default "Not documented description";

    Content[] content() default @Content(mediaType = "application/json", schema = @Schema(example = "{}"));
}
