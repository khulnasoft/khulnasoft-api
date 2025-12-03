// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

package khulnasoftapi_test

import (
	"context"
	"errors"
	"os"
	"testing"

	"github.com/stainless-sdks/khulnasoft-api-go"
	"github.com/stainless-sdks/khulnasoft-api-go/internal/testutil"
	"github.com/stainless-sdks/khulnasoft-api-go/option"
)

func TestUserNewWithOptionalParams(t *testing.T) {
	t.Skip("Prism tests are disabled")
	baseURL := "http://localhost:4010"
	if envURL, ok := os.LookupEnv("TEST_API_BASE_URL"); ok {
		baseURL = envURL
	}
	if !testutil.CheckTestServer(t, baseURL) {
		return
	}
	client := khulnasoftapi.NewClient(
		option.WithBaseURL(baseURL),
		option.WithAPIKey("My API Key"),
	)
	_, err := client.User.New(context.TODO(), khulnasoftapi.UserNewParams{
		User: khulnasoftapi.UserParam{
			ID:         khulnasoftapi.Int(10),
			Email:      khulnasoftapi.String("john@email.com"),
			FirstName:  khulnasoftapi.String("John"),
			LastName:   khulnasoftapi.String("James"),
			Password:   khulnasoftapi.String("12345"),
			Phone:      khulnasoftapi.String("12345"),
			Username:   khulnasoftapi.String("theUser"),
			UserStatus: khulnasoftapi.Int(1),
		},
	})
	if err != nil {
		var apierr *khulnasoftapi.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}

func TestUserGet(t *testing.T) {
	t.Skip("Prism tests are disabled")
	baseURL := "http://localhost:4010"
	if envURL, ok := os.LookupEnv("TEST_API_BASE_URL"); ok {
		baseURL = envURL
	}
	if !testutil.CheckTestServer(t, baseURL) {
		return
	}
	client := khulnasoftapi.NewClient(
		option.WithBaseURL(baseURL),
		option.WithAPIKey("My API Key"),
	)
	_, err := client.User.Get(context.TODO(), "username")
	if err != nil {
		var apierr *khulnasoftapi.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}

func TestUserUpdateWithOptionalParams(t *testing.T) {
	t.Skip("Prism tests are disabled")
	baseURL := "http://localhost:4010"
	if envURL, ok := os.LookupEnv("TEST_API_BASE_URL"); ok {
		baseURL = envURL
	}
	if !testutil.CheckTestServer(t, baseURL) {
		return
	}
	client := khulnasoftapi.NewClient(
		option.WithBaseURL(baseURL),
		option.WithAPIKey("My API Key"),
	)
	err := client.User.Update(
		context.TODO(),
		"username",
		khulnasoftapi.UserUpdateParams{
			User: khulnasoftapi.UserParam{
				ID:         khulnasoftapi.Int(10),
				Email:      khulnasoftapi.String("john@email.com"),
				FirstName:  khulnasoftapi.String("John"),
				LastName:   khulnasoftapi.String("James"),
				Password:   khulnasoftapi.String("12345"),
				Phone:      khulnasoftapi.String("12345"),
				Username:   khulnasoftapi.String("theUser"),
				UserStatus: khulnasoftapi.Int(1),
			},
		},
	)
	if err != nil {
		var apierr *khulnasoftapi.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}

func TestUserDelete(t *testing.T) {
	t.Skip("Prism tests are disabled")
	baseURL := "http://localhost:4010"
	if envURL, ok := os.LookupEnv("TEST_API_BASE_URL"); ok {
		baseURL = envURL
	}
	if !testutil.CheckTestServer(t, baseURL) {
		return
	}
	client := khulnasoftapi.NewClient(
		option.WithBaseURL(baseURL),
		option.WithAPIKey("My API Key"),
	)
	err := client.User.Delete(context.TODO(), "username")
	if err != nil {
		var apierr *khulnasoftapi.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}

func TestUserNewWithListWithOptionalParams(t *testing.T) {
	t.Skip("Prism tests are disabled")
	baseURL := "http://localhost:4010"
	if envURL, ok := os.LookupEnv("TEST_API_BASE_URL"); ok {
		baseURL = envURL
	}
	if !testutil.CheckTestServer(t, baseURL) {
		return
	}
	client := khulnasoftapi.NewClient(
		option.WithBaseURL(baseURL),
		option.WithAPIKey("My API Key"),
	)
	_, err := client.User.NewWithList(context.TODO(), khulnasoftapi.UserNewWithListParams{
		Body: []khulnasoftapi.UserParam{{
			ID:         khulnasoftapi.Int(10),
			Email:      khulnasoftapi.String("john@email.com"),
			FirstName:  khulnasoftapi.String("John"),
			LastName:   khulnasoftapi.String("James"),
			Password:   khulnasoftapi.String("12345"),
			Phone:      khulnasoftapi.String("12345"),
			Username:   khulnasoftapi.String("theUser"),
			UserStatus: khulnasoftapi.Int(1),
		}},
	})
	if err != nil {
		var apierr *khulnasoftapi.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}

func TestUserLoginWithOptionalParams(t *testing.T) {
	t.Skip("Prism tests are disabled")
	baseURL := "http://localhost:4010"
	if envURL, ok := os.LookupEnv("TEST_API_BASE_URL"); ok {
		baseURL = envURL
	}
	if !testutil.CheckTestServer(t, baseURL) {
		return
	}
	client := khulnasoftapi.NewClient(
		option.WithBaseURL(baseURL),
		option.WithAPIKey("My API Key"),
	)
	_, err := client.User.Login(context.TODO(), khulnasoftapi.UserLoginParams{
		Password: khulnasoftapi.String("password"),
		Username: khulnasoftapi.String("username"),
	})
	if err != nil {
		var apierr *khulnasoftapi.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}

func TestUserLogout(t *testing.T) {
	t.Skip("Prism tests are disabled")
	baseURL := "http://localhost:4010"
	if envURL, ok := os.LookupEnv("TEST_API_BASE_URL"); ok {
		baseURL = envURL
	}
	if !testutil.CheckTestServer(t, baseURL) {
		return
	}
	client := khulnasoftapi.NewClient(
		option.WithBaseURL(baseURL),
		option.WithAPIKey("My API Key"),
	)
	err := client.User.Logout(context.TODO())
	if err != nil {
		var apierr *khulnasoftapi.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}
