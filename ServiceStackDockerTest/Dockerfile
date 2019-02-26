FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ServiceStackDockerTest/ServiceStackDockerTest.csproj ServiceStackDockerTest/
COPY ServiceStackDockerTest.ServiceModel/ServiceStackDockerTest.ServiceModel.csproj ServiceStackDockerTest.ServiceModel/
COPY ServiceStackDockerTest.ServiceInterface/ServiceStackDockerTest.ServiceInterface.csproj ServiceStackDockerTest.ServiceInterface/
RUN dotnet restore ServiceStackDockerTest/ServiceStackDockerTest.csproj
COPY . .

WORKDIR /src/ServiceStackDockerTest
RUN dotnet build ServiceStackDockerTest.csproj -c Release -o /app
FROM build AS publish
RUN dotnet publish ServiceStackDockerTest.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "ServiceStackDockerTest.dll"]
