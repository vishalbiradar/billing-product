# billing-product
Spring Boot + Angular 7 web application for billing

1) Create Spring boot UI application from 
   https://start.spring.io/	

2) Add below dependencies to the downloaded code to start as Spring boot UI application

```
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

3) Add *static* folder under /billing-product/src/main/resources/
Here we will be storing the angular generated ui build output.

4) Create Angular app named *billing-product-ui* inside the root folder

```
ng new billing-product-ui
```

5) Add ui-install-build.js to the root folder of billing-product-ui

ui-install-build.js
```
const args = process.argv;
var exec = require('child_process').execSync;
var cmd = "cd billing-product-ui && " + args[2] + " " + args[3] + " " + args[4];

var options = {
	encoding : 'utf8'
};

console.log(exec(cmd, options));
```

6) Add maven plugin and profile to build the angular ui and then copy the build to static folder

```
<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-jar-plugin</artifactId>
				<configuration>
					<archive>
						<manifest>
							<mainClass>com.vrb.product.BillingProductApplication</mainClass>
						</manifest>
					</archive>
				</configuration>
			</plugin>
			<plugin>
				<artifactId>maven-resources-plugin</artifactId>
				<executions>
					<execution>
						<id>copy-resources</id>
						<phase>process-sources</phase>
						<goals>
							<goal>copy-resources</goal>
						</goals>
						<configuration>
							<outputDirectory>${project.basedir}/src/main/resources/static
							</outputDirectory>
							<resources>
								<resource>
									<directory>${project.basedir}/billing-product-ui/dist/billing-product-ui</directory>
									<filtering>true</filtering>
								</resource>
							</resources>
						</configuration>
					</execution>
				</executions>
			</plugin>
		</plugins>
	</build>
	<profiles>
		<profile>
			<id>build-ui</id>
			<build>
				<plugins>
					<plugin>
						<groupId>org.codehaus.mojo</groupId>
						<artifactId>exec-maven-plugin</artifactId>
						<executions>
							<execution>
								<id>install frontend-app</id>
								<phase>generate-sources</phase>
								<goals>
									<goal>exec</goal>
								</goals>
								<configuration>
									<executable>node</executable>
									<arguments>
										<argument>${project.basedir}/billing-product-ui/ui-install-build.js</argument>
										<argument>npm</argument>
										<argument>install</argument>
									</arguments>
								</configuration>
							</execution>
							<execution>
								<id>build ui</id>
								<phase>generate-sources</phase>
								<goals>
									<goal>exec</goal>
								</goals>
								<configuration>
									<executable>node</executable>
									<arguments>
										<argument>${project.basedir}/billing-product-ui/ui-install-build.js</argument>
										<argument>ng</argument>
										<argument>build</argument>
										<argument>--prod</argument>
									</arguments>
								</configuration>
							</execution>
						</executions>
					</plugin>
				</plugins>
			</build>
		</profile>
	</profiles>
```

7) Build the application
```
mvn clean install -Pbuild-ui 
```

8) Start the application
```
java -jar target/billing-product-0.0.1-SNAPSHOT.jar
```

9) Verify at http://localhost:8080