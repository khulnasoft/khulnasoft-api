// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

package khulnasoftapi_test

import (
	"bytes"
	"context"
	"errors"
	"io"
	"os"
	"testing"

	"github.com/stainless-sdks/khulnasoft-api-go"
	"github.com/stainless-sdks/khulnasoft-api-go/internal/testutil"
	"github.com/stainless-sdks/khulnasoft-api-go/option"
)

func TestPetNewWithOptionalParams(t *testing.T) {
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
	_, err := client.Pet.New(context.TODO(), khulnasoftapi.PetNewParams{
		Pet: khulnasoftapi.PetParam{
			Name:      "doggie",
			PhotoURLs: []string{"string"},
			ID:        khulnasoftapi.Int(10),
			Category: khulnasoftapi.PetCategoryParam{
				ID:   khulnasoftapi.Int(1),
				Name: khulnasoftapi.String("Dogs"),
			},
			Status: khulnasoftapi.PetStatusAvailable,
			Tags: []khulnasoftapi.PetTagParam{{
				ID:   khulnasoftapi.Int(0),
				Name: khulnasoftapi.String("name"),
			}},
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

func TestPetGet(t *testing.T) {
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
	_, err := client.Pet.Get(context.TODO(), 0)
	if err != nil {
		var apierr *khulnasoftapi.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}

func TestPetUpdateWithOptionalParams(t *testing.T) {
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
	_, err := client.Pet.Update(context.TODO(), khulnasoftapi.PetUpdateParams{
		Pet: khulnasoftapi.PetParam{
			Name:      "doggie",
			PhotoURLs: []string{"string"},
			ID:        khulnasoftapi.Int(10),
			Category: khulnasoftapi.PetCategoryParam{
				ID:   khulnasoftapi.Int(1),
				Name: khulnasoftapi.String("Dogs"),
			},
			Status: khulnasoftapi.PetStatusAvailable,
			Tags: []khulnasoftapi.PetTagParam{{
				ID:   khulnasoftapi.Int(0),
				Name: khulnasoftapi.String("name"),
			}},
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

func TestPetDelete(t *testing.T) {
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
	err := client.Pet.Delete(context.TODO(), 0)
	if err != nil {
		var apierr *khulnasoftapi.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}

func TestPetFindByStatusWithOptionalParams(t *testing.T) {
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
	_, err := client.Pet.FindByStatus(context.TODO(), khulnasoftapi.PetFindByStatusParams{
		Status: khulnasoftapi.PetFindByStatusParamsStatusAvailable,
	})
	if err != nil {
		var apierr *khulnasoftapi.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}

func TestPetFindByTagsWithOptionalParams(t *testing.T) {
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
	_, err := client.Pet.FindByTags(context.TODO(), khulnasoftapi.PetFindByTagsParams{
		Tags: []string{"string"},
	})
	if err != nil {
		var apierr *khulnasoftapi.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}

func TestPetUpdateWithFormWithOptionalParams(t *testing.T) {
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
	err := client.Pet.UpdateWithForm(
		context.TODO(),
		0,
		khulnasoftapi.PetUpdateWithFormParams{
			Name:   khulnasoftapi.String("name"),
			Status: khulnasoftapi.String("status"),
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

func TestPetUploadImageWithOptionalParams(t *testing.T) {
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
	_, err := client.Pet.UploadImage(
		context.TODO(),
		0,
		io.Reader(bytes.NewBuffer([]byte("some file contents"))),
		khulnasoftapi.PetUploadImageParams{
			AdditionalMetadata: khulnasoftapi.String("additionalMetadata"),
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
